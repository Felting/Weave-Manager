import {writable} from "svelte/store"
import type {
    Agent,
    LaunchProfile,
    MinecraftProcess,
    Mod,
    ModProfile,
    ProcessHistory,
    Settings,
    WeaveProcess
} from "./types";
import {readProfiles, readProcessHistory, readMods, readAgents, readSettings} from "./shared";

export const processMap = writable<Map<number, MinecraftProcess>>(new Map())
export const processHistory = writable<ProcessHistory>(await readProcessHistory())
export const launchProfiles = writable<Map<string, LaunchProfile>>(await readProfiles<LaunchProfile>(".lprof"))
export const modProfiles = writable<Map<string, ModProfile>>(await readProfiles<ModProfile>(".mprof"))
export const modList = writable<Mod[]>(await readMods())
export const agentList = writable<Agent[]>(await readAgents())
export const selectedWeaveProcess = writable<WeaveProcess>(<WeaveProcess> {
    pid: -1,
    client: "None",
    log_file: null,
    output: []
})
export const weaveProcessMap = writable<Map<number, WeaveProcess>>(new Map())

export const settings = writable<Settings>(await readSettings())