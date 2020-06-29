import IStack from './interface'

export default class CStack <T> implements IStack<T> {
    array: T[] = []

    push (v: T): void {
        this.array.push(v);
    }

    pop (): T {
        if (this.array.length === 0) {
            throw new Error('栈已空')
        }
        // @ts-ignore
        return this.array.pop()
    }

    peek (): T {
        const { array } = this
        return array[array.length - 1]
    }

    isEmpty (): boolean {
        return this.array.length === 0
    }

    getSize (): number {
        return this.array.length
    }

    toString(): string {
        return `${this.array.join(' -> ')} top`
    }
}
