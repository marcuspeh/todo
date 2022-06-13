import NodeRSA from 'node-rsa'

export default class AuthService {
    private privateKey = new NodeRSA(process.env.PRIVATE_KEY)//'-----BEGIN RSA PRIVATE KEY-----MIIEpgIBAAKCAQEAvUgtgysobzYrTidh3mljUy2EnzJeqvDZrSa0lGP+4qlfH7FvT8lo6nhlM4Qi8pKfI0ngQ/sVcRf+O5g47M1t6Z63aUNP0MGZUdiM1IzCZHii6vDB63UH0aRx/qiJrjvGJ8kQmnWUoHQC3Mfo20ts1Q4N/q8XgfICioPz2HT3dBY7DjHpVQGquB/fXukuNiRXEmgdc3PYu2aCsNqfp3UT2qtDYhPKx5EHRf4nzUMSSYh3WK8PfLwJUyTzMEk4q66HdJRlMbE4p0EmBXiRmTHdsOQi7VdykaUSvC/3U4MiCHsWEb/M6pjhQ58tKQ8SwGOoPTGmSsjfSS5/qyw7FH/wUwIDAQABAoIBAQCiRlEOlV+TCMPTuxvCzGNlGi8LNOnIb7iPJBHI7nnE5SQyTbJ6mtghvJo2smArytw4KsvkPEzDqqhBe13CVtSWZ4Yi7pxtAq1pZ9hFGXBHJs210jbOoITVjMBWbTOsdn6J+W0MnyWO8ibKFXFjIKTre6Mv5/ilZVAcZMgXmR/VGwfcGNra8YxBU4E14aqUdCh+y+6O03KPfgv2Nn/R9EN12EpqNK0FnTz2wMpNZjc7uX4D3npW8GOI6YN00g65+4RbcYY1g5fSVEdq5efvKip+b8+KIig3CMjNBSnLKGv1G1DgvukoD4iju7bnyJB0EHgBSDB9k/ZyQiiL5zXfLd5BAoGBAOn/cqreWi3qDNRGXz3TKUBVNiQ4XtXXWstOBbx7S30UR+heCYuhODnmiTfiaiH3Ne0MDkLS3Sh7f6q86WIq30vMsUBAFI0Hw7VJZ+VbCc0jOq8yls/kAuNEPBZWPc+q7s7B4hUKwakMOg9x+DLjzGwQgHJbteeyoGc4HwbT/xbjAoGBAM8UYBhYsLHkFRda5t36ib36YmHwqyvdp7L0xthA6VRjpSyxuJVKL34C6RKEWxKheJh46b6rVZz5mCjBbQj1mr4yyoFlOW2fDVj5Bbc39aDGjOla5gXYW6CcgzUD27Ok/CBmo7CSHcQdwCOKWVTdTnPV3dZd6uYi8Nz6+eCYu4vRAoGBAMDjMJvHVKD6iP7Gz6XAFgYQ9+NdkFdIAXELbNEU9YIyoJ/cPJQcHqQj9ELb4c8D4DD6Ohs9hM7lFrUgqmWgn5b1Mbub1xT2LI6Y5wr6Q5cVDj/zPLw74WGEEt/60VMJPXez/PCJgGAgUw/+S7FvdEg0Rh1+mfFXnr/XVEQlpuYvAoGBAIk0h+M5yIFljS/3U+aaXO+aWdto2hFrgPTKyIF6qN74UvXFH3cTO1pz1TgmqC00/bGQ09c4sLYcjlvapUL9cLU69AA+MInYi8B65vWZx07qn2zyhFw1GajWav0SfFyQIVnah/SzK7PIvokN3tii9Zs8hgrGGaC4X/0a8buFlyYxAoGBAJ/AQPlNRs+/U+rseZHGCZfqo+B8oaXRBzcC3KAnHEasVMIAMl78K8EoJ/kQPlDWsA9snDetVRcBly4MJhUK4jBr1xKm73k2zowT4DbH3Gwnk1BZ+9VcHB5hhcNaykzQnsAi2BqM87KnvWGmJ7KLC9gdqDjAks+TuIOsH2pEAuKO-----END RSA PRIVATE KEY-----')
    private publicKey = new NodeRSA(process.env.PUBLIC_KEY) //'-----BEGIN RSA PUBLIC KEY-----MIIBCgKCAQEAvUgtgysobzYrTidh3mljUy2EnzJeqvDZrSa0lGP+4qlfH7FvT8lo6nhlM4Qi8pKfI0ngQ/sVcRf+O5g47M1t6Z63aUNP0MGZUdiM1IzCZHii6vDB63UH0aRx/qiJrjvGJ8kQmnWUoHQC3Mfo20ts1Q4N/q8XgfICioPz2HT3dBY7DjHpVQGquB/fXukuNiRXEmgdc3PYu2aCsNqfp3UT2qtDYhPKx5EHRf4nzUMSSYh3WK8PfLwJUyTzMEk4q66HdJRlMbE4p0EmBXiRmTHdsOQi7VdykaUSvC/3U4MiCHsWEb/M6pjhQ58tKQ8SwGOoPTGmSsjfSS5/qyw7FH/wUwIDAQAB-----END RSA PUBLIC KEY-----')

    public async decrypt(ciphertext: string): Promise<string> {
        return this.privateKey.decrypt(ciphertext, 'utf8')
    }

    public async encrypt(plaintext: string): Promise<string> {
        return this.publicKey.encrypt(plaintext, 'base64')
    }
}
