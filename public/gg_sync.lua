-- GameGlance Auto-Sync Bridge for FBNeo
-- Drop this in your Fightcade/emulator/fbneo/scripts folder!

local GAME_MAP = {
    ["sfiii3nr1"] = { p1 = 0x02068C6C, p2 = 0x02069104, size = 1 }, -- 3rd Strike
    ["sfa3"]      = { p1 = 0x00000000, p2 = 0x00000000, size = 1 }, -- Alpha 3
    ["mvc2"]      = { p1 = 0x00000000, p2 = 0x00000000, size = 1 }, -- MVC2
    ["cvs2"]      = { p1 = 0x00000000, p2 = 0x00000000, size = 1 }, -- CVS2
}

local current_rom = emu.romname()
local game_config = GAME_MAP[current_rom]

local last_p1_char = -1
local last_p2_char = -1

local log_file = "gg_sync.log"

local function log_update(p1, p2)
    local f = io.open(log_file, "a")
    if f then
        f:write("ROM:" .. current_rom .. "|P1:" .. tostring(p1) .. "|P2:" .. tostring(p2) .. "\n")
        f:close()
    end
end

if not game_config then
    print("GameGlance: ROM '" .. current_rom .. "' not yet mapped for character sync.")
    -- Still write the ROM launch so GameGlance can switch to the game!
    log_update(-1, -1)
else
    print("GameGlance: Auto-Sync running for " .. current_rom)
    -- Write initial state
    log_update(-1, -1)
    
    local function read_mem(addr, size)
        if size == 1 then return memory.readbyte(addr) end
        if size == 2 then return memory.readword(addr) end
        if size == 4 then return memory.readdword(addr) end
        return 0
    end

    local function check_memory()
        local p1_char = read_mem(game_config.p1, game_config.size)
        local p2_char = read_mem(game_config.p2, game_config.size)
        
        if p1_char ~= last_p1_char or p2_char ~= last_p2_char then
            last_p1_char = p1_char
            last_p2_char = p2_char
            log_update(p1_char, p2_char)
        end
    end

    emu.registerafter(check_memory)
end
