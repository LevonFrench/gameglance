import re

def is_valid_notation(input_str, notation_type='traditional'):
    """
    Validates whether an input string looks like valid fighting game notation
    rather than scraped prose/garbage.
    
    Returns True if valid, False if garbage.
    """
    if not input_str:
        return False
        
    # Rule 1: No fighting game input should be this long
    if len(input_str) > 50:
        return False
        
    # Rule 2: Excessive prose detection
    prose_words = [
        r"\bdefeat\b", r"\brequires\b", r"\bduring\b", r"\btriangle\b", 
        r"\bsquare\b", r"\bcircle\b", r"\bcross\b", r"\bpunch\b", 
        r"\bkick\b", r"\bjump\b", r"\bclose\b", r"\bnear\b", r"\bfar\b", 
        r"\bwhen\b", r"\bafter\b", r"\bbefore\b", r"\bmust\b", r"\bonly\b"
    ]
    prose_pattern = re.compile('|'.join(prose_words), re.IGNORECASE)
    
    # If it contains prose and is relatively long, it's definitely garbage
    if prose_pattern.search(input_str) and len(input_str) > 10:
        return False
        
    # Rule 3: Formatting sanity checks
    # Standard inputs shouldn't have consecutive spaces or multiple newlines
    if "  " in input_str or "\n\n" in input_str:
        return False
        
    # Notation-specific rules
    if notation_type == 'traditional':
        # Traditional notation shouldn't have raw 3-digit sequences (like 236) 
        # except for specific moves like 360/720/1080
        if re.search(r'\d{3}', input_str) and not any(x in input_str for x in ['360', '720', '1080']):
            return False
            
    return True
