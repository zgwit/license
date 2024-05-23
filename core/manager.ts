
const modules: Map<string, Module> = new Map()

export function licRegisterModule(module: string, pubkey: string) {
    let mod = modules.get(module)
    if (!mod) {
        mod = new Module(pubkey)
        modules.set(module, mod)
    } else {
        //更新公共证书
        mod.publicKey = pubkey
    }
}

export function licPutLicense(module: string, license: string) {
    let mod = modules.get(module)
    if (!mod) {
        mod = new Module("") //空证书
        modules.set(module, mod)
    }
    mod.licenses.add(license)
}


