class Module {
    publicKey: string
    licenses: Set<string>

    constructor(pubkey: string) {
        this.publicKey = pubkey
        this.licenses = new Set()
    }

}


class License {
    privateKey: string
    type: string
    id: string
    domain: string

    async crypt(privateKey: string) {
        let pair = await crypto.subtle.generateKey(
            {
                name:"RSASSA-PKCS1-v1_5",
                modulusLength: 2048,
                publicExponent: [0x01, 0x00, 0x01],
                hash: "SHA256",
            },
            true,
            ["sign", "verify"])
        //await window.crypto.subtle.generateKey("RSASSA-PKCS1-v1_5", false, ["sign", "verify"])
        await crypto.subtle.exportKey("pkcs8", pair.privateKey)
        await crypto.subtle.exportKey("pkcs8", pair.publicKey)
    }

    async validate(){

    }
}


