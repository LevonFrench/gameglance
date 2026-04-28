-- gg_sync.lua
-- This script runs inside FBNeo to extract game state and synchronize it with GameGlance.
--
-- INSTRUCTIONS:
-- Load this script in FBNeo via Game -> Lua Scripting -> New Lua Script Window... -> Browse -> Run.
-- Ensure GameGlance is configured to point to the directory containing this script's log output.

local last_log = ""

-- Memory map for supported FBNeo arcade games.
-- Extracted dynamically from community training mode scripts.
local memory_map = {
    ["aliencha"] = {
        p1health = 0x200fc5,
        p2health = 0x2010a7,
        p1direction = 0x200f7a,
        p2direction = 0x20105C,
    },
    ["aof"] = {
        p1health = 0x1092cd,
        p2health = 0x1093cd,
        p1meter = 0x1094a4,
        p2meter = 0x1095a4,
    },
    ["aof2"] = {
        p1health = 0x1092ed,
        p2health = 0x1093ed,
        p1meter = 0x1094a4,
        p2meter = 0x1095a4,
        p1direction = 0x1080bd,
        p2direction = 0x10847d,
    },
    ["aof3"] = {
        p1health = 0x100468,
        p2health = 0x100568,
        p1meter = 0x10046A,
        p2meter = 0x10056A,
        p1direction = 0x10048c,
        p2direction = 0x10058c,
    },
    ["asurabld"] = {
        p1health = 0x40390F,
        p2health = 0x4046C5,
    },
    ["asurabus"] = {
        p1direction = 0x4033DB,
        p2direction = 0x404091,
    },
    ["avengrgs"] = {
        p1health = 0x00108DCD,
        p2health = 0x00108F7D,
    },
    ["bloodstm"] = {
        p1health = 0x65EF,
        p2health = 0x6779,
        p1direction = 0x65B9,
        p2direction = 0x6743,
    },
    ["bloodwar"] = {
        p1health = 0x105f6e,
        p2health = 0x1063C0,
        p1direction = 0x102A30,
        p2direction = 0x102A60,
    },
    ["breakrev"] = {
        p1health = 0x10734E,
        p2health = 0x1078AE,
        p1meter = 0x107361,
        p2meter = 0x1078C1,
        p1direction = 0x107364,
        p2direction = 0x107365,
    },
    ["cybots"] = {
        p1health = 0xFF81E5,
        p2health = 0xFF85E5,
        p1meter = 0xFF8534,
        p2meter = 0xFF8934,
        p1direction = 0xFF81A9,
        p2direction = 0xFF85A9,
    },
    ["dankuga"] = {
        p1health = 0x412B35,
        p2health = 0x412D35,
        p1meter = 0x412BC1,
        p2meter = 0x412DC1,
    },
    ["daraku"] = {
        p1health = 0x602DF1B,
        p2health = 0x602E11B,
        p1meter = 0x602DF21,
        p2meter = 0x602E121,
        p1direction = 0x602de52,
        p2direction = 0x602e052,
        p1char = 0x602DE81,
        p2char = 0x602E081,
    },
    ["dbz2"] = {
        p1health = 0x4862a9,
        p2health = 0x4864a9,
        p1meter = 0x48633b,
        p2meter = 0x48653b,
        p1direction = 0x484203,
        p2direction = 0x484219,
    },
    ["dinorex"] = {
        p1health = 0x605124,
        p2health = 0x605190,
        p1meter = 0x605123,
        p2meter = 0x60518f,
    },
    ["doubledr"] = {
        p1health = 0x100450,
        p2health = 0x100550,
        p1meter = 0x100510,
        p2meter = 0x100610,
    },
    ["dstlk"] = {
        p1health = 0xFF83CB,
        p2health = 0xFF87CB,
        p1meter = 0xFF855F,
        p2meter = 0xFF895F,
        p1direction = 0xFF830C,
        p2direction = 0xFF830D,
    },
    ["fatfursp"] = {
        p1health = 0x10049a,
        p2health = 0x10059a,
        p1direction = 0x100469,
        p2direction = 0x100569,
    },
    ["fatfury1"] = {
        p1health = 0x1003B8,
        p2health = 0x1004B8,
        p1direction = 0x100445,
        p2direction = 0x100345,
    },
    ["fatfury2"] = {
        p1health = 0x1003CB,
        p2health = 0x1004CB,
        p1direction = 0x100367,
        p2direction = 0x100467,
    },
    ["fatfury3"] = {
        p1health = 0x100489,
        p2health = 0x100589,
        p1direction = 0x100471,
        p2direction = 0x100571,
    },
    ["fightfev"] = {
        p1health = 0x10C602,
        p2health = 0x10C702,
        p1direction = 0x10C649,
        p2direction = 0x10C749,
    },
    ["galaxyfg"] = {
        p1health = 0x10103C,
        p2health = 0x101152,
    },
    ["garou"] = {
        p1direction = 0x100458,
        p2direction = 0x100558,
    },
    ["gowcaizr"] = {
        p1health = 0x102D09,
        p2health = 0x1035Bf,
        p1direction = 0x100186,
        p2direction = 0x100187,
    },
    ["gundamex"] = {
        p1health = 0x204569,
        p2health = 0x2045BF,
    },
    ["hippodrm"] = {
        p1health = 0xFF8032,
        p2health = 0xFF8072,
        p1direction = 0xFF804E,
        p2direction = 0xFF808E,
    },
    ["hsf2"] = {
        p1health = 0xFF8366,
        p2health = 0xFF8766,
        p1meter = 0xFF85F0,
        p2meter = 0xFF89F0,
    },
    ["jchan"] = {
        p1health = 0x200FCE,
        p2health = 0x201216,
    },
    ["jchan2"] = {
        p1health = 0x201116,
        p2health = 0x2013A2,
        p1meter = 0x201200,
        p2meter = 0x20148C,
    },
    ["jojo"] = {
        p1direction = 0x2030479,
        p2direction = 0x2030881,
        p1health = 0x2030DBD,
        p2health = 0x20311C5,
        p1meter = 0x2030443,
        p2meter = 0x2030467,
    },
    ["jojoba"] = {
        p1health = 0x205BB48,
        p2health = 0x205BB49,
        p1meter = 0x2034863,
        p2meter = 0x2034887,
        p1direction = 0x2034899,
        p2direction = 0x2034CB9,
    },
    ["kabukikl"] = {
        p1health = 0x100e56,
        p2health = 0x100f56,
        p1meter = 0x100e6e,
        p2meter = 0x100f6e,
        p1direction = 0x100eb9,
        p2direction = 0x100fb9,
    },
    ["karnovr"] = {
        p1health = 0x1037B7,
        p2health = 0x1039B7,
    },
    ["kf2k5uni"] = {
        p1health = 0x108239,
        p2health = 0x108439,
        p1meter = 0x1082E3,
        p2meter = 0x1084E3,
        p1direction = 0x108131,
        p2direction = 0x108331,
    },
    ["kizuna"] = {
        p1health = 0x108313,
        p2health = 0x108513,
    },
    ["kof2000"] = {
        p1health = 0x108239,
        p2health = 0x108439,
        p1meter = 0x1081e8,
        p2meter = 0x1083e8,
        p1direction = 0x108131,
        p2direction = 0x108331,
    },
    ["kof2001"] = {
        p1health = 0x108239,
        p2health = 0x108439,
        p1meter = 0x1081e8,
        p2meter = 0x1083e8,
        p1direction = 0x108131,
        p2direction = 0x108331,
    },
    ["kof2002"] = {
        p1health = 0x108239,
        p2health = 0x108439,
        p1meter = 0x1082E3,
        p2meter = 0x1084E3,
        p1direction = 0x108131,
        p2direction = 0x108331,
    },
    ["kof2003"] = {
        p1char = 1,
        p2char = 1,
        p1meter = 0x2FE800,
        p2meter = 0x2FEC00,
    },
    ["kof94"] = {
        p1health = 0x108221,
        p2health = 0x108421,
        p1meter = 0x108219,
        p2meter = 0x108419,
        p1direction = 0x100731,
        p2direction = 0x100b31,
    },
    ["kof95"] = {
        p1health = 0x108221,
        p2health = 0x108421,
        p1meter = 0x108219,
        p2meter = 0x108419,
        p1direction = 0x100931,
        p2direction = 0x100d31,
    },
    ["kof96"] = {
        p1health = 0x108239,
        p2health = 0x108439,
        p1meter = 0x1081e8,
        p2meter = 0x1083e8,
        p1direction = 0x108131,
        p2direction = 0x108331,
    },
    ["kof97"] = {
        p1health = 0x108239,
        p2health = 0x108439,
        p1meter = 0x1081e8,
        p2meter = 0x1083e8,
        p1direction = 0x108131,
        p2direction = 0x108331,
    },
    ["kof98"] = {
        p1health = 0x108239,
        p2health = 0x108439,
        p1meter = 0x1081e8,
        p2meter = 0x1083e8,
        p1direction = 0x108131,
        p2direction = 0x108331,
    },
    ["kof99"] = {
        p1health = 0x108239,
        p2health = 0x108439,
        p1meter = 0x1081e8,
        p2meter = 0x1083e8,
        p1direction = 0x108131,
        p2direction = 0x108331,
    },
    ["martmast"] = {
        p1health = 0x81C67F,
        p2health = 0x81C7BB,
        p1meter = 0x80DAA1,
        p2meter = 0x80DC5D,
    },
    ["matrim"] = {
        p1health = 0x10306B,
        p2health = 0x102E9F,
        p1meter = 0x10307D,
        p2meter = 0x102EB1,
    },
    ["msgundam"] = {
        p1health = 0x202883,
        p2health = 0x2029AF,
        p1direction = 0x202154,
        p2direction = 0x202438,
    },
    ["mshvsf"] = {
        p1health = 0xFF4251,
        p1char = 0xFF404b,
        p2health = 0xFF4651,
        p2char = 0xFF444B,
        p1meter = 0xFF3A54,
        p2meter = 0xFF3E54,
        p1direction = 0xFF384b,
        p2direction = 0xFF3C4b,
    },
    ["mvsc"] = {
        p1health = 0xFF3A71,
        p2health = 0xFF3E71,
        p1meter = 0xFF3274,
        p2meter = 0xFF3674,
    },
    ["mwarr"] = {
        p1health = 0x112fce,
        p2health = 0x112fd0,
        p1meter = 0x113684,
        p2meter = 0x113686,
        p1direction = 0x112f5e,
        p2direction = 0x112f60,
    },
    ["nwarr"] = {
        p1health = 0xFF83CB,
        p2health = 0xFF88CB,
        p1meter = 0xFF855F,
        p2meter = 0xFF8A5F,
        p1direction = 0xFF830C,
        p2direction = 0xFF830D,
    },
    ["rabbit"] = {
        p1health = 0xFF24EF,
        p2health = 0xFF2533,
        p1meter = 0xFF24FA,
        p2meter = 0xFF253F,
        p1direction = 0xFF1C25,
        p2direction = 0xFF2025,
    },
    ["ragnagrd"] = {
        p1health = 0x109089,
        p2health = 0x109361,
    },
    ["rbff1"] = {
        p1health = 0x100489,
        p2health = 0x100589,
        p1meter = 0x1004BA,
        p2meter = 0x1005BA,
        p1direction = 0x100471,
        p2direction = 0x100571,
    },
    ["rbff2"] = {
        p1health = 0x10048b,
        p2health = 0x10058b,
        p1meter = 0x1004BC,
        p2meter = 0x1005Bc,
        p1direction = 0x100471,
        p2direction = 0x100571,
    },
    ["rbffspec"] = {
        p1health = 0x10048B,
        p2health = 0x10058B,
        p1meter = 0x1004BC,
        p2meter = 0x1005Bc,
        p1direction = 0x100471,
        p2direction = 0x100571,
    },
    ["ringdest"] = {
        p1health = 0xFF802C,
        p2health = 0xFF842C,
        p1direction = 0xFF8038,
        p2direction = 0xFF8438,
    },
    ["rotd"] = {
        p1health = 0x1027BF,
        p2health = 0x102067,
    },
    ["samsh5sp"] = {
        p1health = 0x108445,
        p2health = 0x108655,
        p1meter = 0x10844E,
        p2meter = 0x10865E,
    },
    ["samsho2"] = {
        p1direction = 0x10105c,
        p2direction = 0x100ad0,
    },
    ["samsho4"] = {
        p1health = 0x108443,
        p2health = 0x108643,
        p1meter = 0x10844C,
        p2meter = 0x10864C,
    },
    ["samsho5"] = {
        p1health = 0x108445,
        p2health = 0x108655,
        p1meter = 0x10844E,
        p2meter = 0x10865E,
    },
    ["schmeisr"] = {
        p1health = 0xFF55B8,
        p2health = 0xFF55F8,
        p1direction = 0xFF2F2A,
        p2direction = 0xFF2F4A,
    },
    ["sf"] = {
        p1health = 0xFF86B6,
        p2health = 0xFF86E0,
        p1direction = 0xFFE437,
        p2direction = 0xFFEA37,
    },
    ["sfa"] = {
        p1health = 0xFF8441,
        p2health = 0xFF8841,
        p1meter = 0xFF84BF,
        p2meter = 0xFF88BF,
        p1direction = 0xff840b,
        p2direction = 0xff880b,
    },
    ["sfa2"] = {
        p1health = 0xFF8450,
        p2health = 0xFF8850,
        p1meter = 0xFF849E,
        p2meter = 0xFF889E,
    },
    ["sfa3"] = {
        p1health = 0xFF8450,
        p2health = 0xFF8850,
        p1meter = 0xFF851F,
        p2meter = 0xFF891F,
        p1direction = 0xff840b,
        p2direction = 0xff880b,
    },
    ["sfiii"] = {
        p1health = 0x200D22B,
        p2health = 0x200D603,
        p1meter = 0x200D953,
        p2meter = 0x200D973,
        p1direction = 0x200D196,
        p2direction = 0x200D197,
    },
    ["sfiii2"] = {
        p1health = 0x200E5A3,
        p2health = 0x200E9AF,
        p1meter = 0x200ED3F,
        p2meter = 0x200ED6B,
        p1direction = 0x200E50E,
        p2direction = 0x200E91A,
    },
    ["sfiii3nr1"] = {
        p1char = 0x02011387,
        p2char = 0x02011388,
        name = "Street Fighter III: 3rd Strike",
    ["sfiii3"] = {
        p1health = 0x2068D0B,
        p2health = 0x20691A3,
        p1meter = 0x20695BE,
        p2meter = 0x20695EB,
        p1direction = 0x2068C76,
        p2direction = 0x2068C77,
    },
    ["sgemf"] = {
        p1health = 0xFF8441,
        p2health = 0xFF8841,
        p1meter = 0xFF8594,
        p2meter = 0xFF8994,
        p1direction = 0xFF840b,
        p2direction = 0xFF880b,
    },
    ["slammast"] = {
        p1health = 0xFF9157,
        p2health = 0xFF9357,
    },
    ["ssf2t"] = {
        p1health = 0,
        p2health = 0,
    },
    ["svc"] = {
        p1health = 0x10A239,
        p2health = 0x10A4B9,
        p1meter = 0x10A1E8,
        p2meter = 0x10A468,
        p1direction = 0x10A131,
        p2direction = 0x10A3B1,
    },
    ["teot"] = {
        p1health = 0x101FEC,
        p2health = 0x102174,
        p1direction = 0x101FC8,
        p2direction = 0x102150,
    },
    ["timekill"] = {
        p1health = 0x2C7B,
        p2health = 0x2DCF,
    },
    ["tkdensho"] = {
        p1health = 0x2004A4,
        p2health = 0x200534,
    },
    ["trstar"] = {
        p1health = 0x41806D,
        p2health = 0x4180ED,
    },
    ["umk3"] = {
        p1health = 0x01060a60,
        p2health = 0x01061610,
        p1direction = 0x01030541,
        p2direction = 0x0105fa01,
    },
    ["viofight"] = {
        p1health = 0xA0021C,
        p2health = 0xA0029C,
    },
    ["vsav"] = {
        p1health = 0xFF8450,
        p2health = 0xFF8850,
        p1meter = 0xFF8509,
        p2meter = 0xFF8909,
        p1direction = 0xFF8520,
        p2direction = 0xFF8920,
    },
    ["wakuwak7"] = {
        p1health = 0x10014A,
        p2health = 0x10028A,
        p1meter = 0x100159,
        p2meter = 0x100299,
        p1direction = 0x100119,
        p2direction = 0x100259,
        p1char = 0x106997,
        p2char = 0x1069A1,
    },
    ["wh1"] = {
        p1health = 0x10600A,
        p2health = 0x10610A,
        p1direction = 0x100021,
        p2direction = 0x100121,
    },
    ["wh2"] = {
        p1health = 0x10600C,
        p2health = 0x10610C,
        p1direction = 0x100021,
        p2direction = 0x100121,
    },
    ["whp"] = {
        p1health = 0x10600C,
        p2health = 0x10610c,
        p1meter = 0x106a17,
        p2meter = 0x106B17,
        p1direction = 0x108295,
    },
    ["xmcota"] = {
        p1health = 0xFF4191,
        p2health = 0xFF4591,
        p1meter = 0xFF4195,
        p2meter = 0xFF4595,
        p1direction = 0xFF404D,
        p2direction = 0xFF444D,
        p1char = 0xFF4051,
        p2char = 0xFF4451,
    },
    ["xmvsf"] = {
        p1health = 0xff4a11,
        p1char = 0xFF4053,
        p2health = 0xff4e11,
        p2char = 0xFF4453,
        p1meter = 0xff4214,
        p2meter = 0xff4614,
        p1direction = 0xff404b,
        p2direction = 0xff444b,
    },
}


-- Hook into FBNeo's frame boundary
emu.registerbefore(function()
    local current_game = emu.romname()
    if not current_game then return end

    local map = memory_map[current_game]
    
    if map then
        -- Read available memory addresses safely
        local p1char = map.p1char and memory.readbyte(map.p1char) or -1
        local p2char = map.p2char and memory.readbyte(map.p2char) or -1
        local p1health = map.p1health and memory.readbyte(map.p1health) or -1
        local p2health = map.p2health and memory.readbyte(map.p2health) or -1
        local p1meter = map.p1meter and memory.readbyte(map.p1meter) or -1
        local p2meter = map.p2meter and memory.readbyte(map.p2meter) or -1
        
        -- Fallback to old keys for backward compatibility if p1/p2 keys exist
        if p1char == -1 and map.p1 then p1char = memory.readbyte(map.p1) end
        if p2char == -1 and map.p2 then p2char = memory.readbyte(map.p2) end

        -- Format string: ROM|P1Char|P2Char|P1HP|P2HP|P1Meter|P2Meter
        local current_log = string.format("ROM:%s|P1:%s|P2:%s|P1HP:%s|P2HP:%s|P1M:%s|P2M:%s\n", 
            current_game, p1char, p2char, p1health, p2health, p1meter, p2meter)

        -- Write to log only if state changed (to avoid excessive I/O at 60fps)
        if current_log ~= last_log then
            local file = io.open("gg_sync.log", "w")
            if file then
                file:write(current_log)
                file:close()
            end
            last_log = current_log
        end
    end
end)
