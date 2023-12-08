/**
 * Adds two numbers.
 *
 * @since 3.4.0
 * @category Math
 * @param augend The first number in an addition.
 * @param addend The second number in an addition.
 * @returns Returns the total.
 * @example
 *
 * add(6, 4)
 * // => 10
 */
function add(augend: string, addend: string): string
function add(augend: string, addend: string | number): string
function add(augend: string | number, addend: string): string
function add(augend: number, addend: number): number
function add(augend: number | string, addend: number | string): string | number {
    // @ts-ignore
    return augend + addend
}

export default add
