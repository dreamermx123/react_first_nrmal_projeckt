/* eslint-disable @typescript-eslint/no-unused-vars */

type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    // console.log(cls, additional, mods)
    // console.log([
    //     cls,
    //     ...additional.filter(Boolean),
    //     ...Object.entries(mods)
    //         .filter(([className, value]) => Boolean(value))
    //         .map(([className]) => className)
    // ].join(' '))
    // console.log( [
    //     cls,
    //     ...additional.filter(Boolean),
    //     ...Object.entries(mods)
    //         .filter(([className, value]) => Boolean(value))
    //         .map(([className]) => className)
    // ]
    //     .join(' '))
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}



