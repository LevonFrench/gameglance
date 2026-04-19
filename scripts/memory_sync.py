import time
import sys

try:
    import pymem
    import pymem.process
except ImportError:
    print("Error: pymem is not installed. Please install it using 'pip install pymem'")
    sys.exit(1)

# Target executable name for Fightcade's FBNeo
TARGET_PROCESS = "fcadefbneo.exe"

# Dictionary of game signatures to identify the running game
# Format: {"ROM_NAME": {"p1_char_ptr": 0xOFFSET, "p2_char_ptr": 0xOFFSET}}
GAME_OFFSETS = {
    "sfiii3n": { # Street Fighter III 3rd Strike
        "p1_char_ptr": 0x02068C6C, # Example placeholder
        "p2_char_ptr": 0x02069104, # Example placeholder
    },
    "cvs2": { # Capcom vs SNK 2
        "p1_char_ptr": 0x02021A50,
        "p2_char_ptr": 0x02021F68,
    }
}

class MemorySync:
    def __init__(self, process_name=TARGET_PROCESS):
        self.process_name = process_name
        self.pm = None
        self.base_address = None
        self.current_game = None

    def attach(self):
        try:
            self.pm = pymem.Pymem(self.process_name)
            self.base_address = self.pm.process_base.lpBaseOfDll
            print(f"Successfully attached to {self.process_name}")
            print(f"Base Address: {hex(self.base_address)}")
            return True
        except pymem.exception.ProcessNotFound:
            print(f"Waiting for {self.process_name} to launch...")
            return False

    def detect_game(self):
        # In a real implementation, we would read a specific memory region where FBNeo stores the current loaded ROM name.
        # For now, we assume we just check our dictionary.
        pass

    def read_player_state(self, game_id):
        if not self.pm:
            return None

        offsets = GAME_OFFSETS.get(game_id)
        if not offsets:
            return None

        try:
            # Example read
            # p1_id = self.pm.read_int(self.base_address + offsets["p1_char_ptr"])
            # p2_id = self.pm.read_int(self.base_address + offsets["p2_char_ptr"])
            
            # Since these are placeholders, we'll return a mock state
            p1_id = 0
            p2_id = 1

            return {
                "p1_character_id": p1_id,
                "p2_character_id": p2_id
            }
        except Exception as e:
            print(f"Error reading memory: {e}")
            return None

    def broadcast_state(self, state):
        # Here we would send the state to the local Node.js server via WebSockets or HTTP
        # to trigger a UI update on the frontend (e.g., automatically select the characters being played).
        print(f"Broadcasting State: {state}")

    def loop(self):
        while True:
            if not self.pm:
                if not self.attach():
                    time.sleep(2)
                    continue

            # Check if process is still alive
            try:
                self.pm.read_int(self.base_address)
            except pymem.exception.MemoryReadError:
                print("Process lost. Reattaching...")
                self.pm = None
                continue

            # Read and broadcast
            state = self.read_player_state("sfiii3n")
            if state:
                self.broadcast_state(state)

            time.sleep(1) # Poll rate

if __name__ == "__main__":
    print("Starting Fighting Game Memory Sync Service...")
    sync = MemorySync()
    sync.loop()
