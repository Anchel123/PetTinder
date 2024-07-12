export type MedicalIssue = {
    medicalFiles: File[]
    description: string
}

export default class Dog {
    private name: string
    private age: number
    private breed: string
    private color: string
    private weight: number
    private height: number
    private isGoodBoy: boolean
    private medicalIssues: MedicalIssue[]
    [key: string]: any

    constructor(name: string, age: number, breed: string, color: string, weight: number, height: number, isGoodBoy: boolean, medicalIssue: MedicalIssue[]) {
        this.name = name
        this.age = age
        this.breed = breed
        this.color = color
        this.weight = weight
        this.height = height
        this.isGoodBoy = isGoodBoy
        this.medicalIssues = medicalIssue
    }

    get Name(): string {
        return this.name
    }

    get Age(): number {
        return this.age
    }

    get Breed(): string {
        return this.breed
    }

    get Color(): string {
        return this.color
    }

    get Weight(): number {
        return this.weight
    }

    get Height(): number {
        return this.height
    }

    get IsGoodBoy(): boolean {
        return this.isGoodBoy
    }

    get MedicalIssues(): MedicalIssue[] {
        return this.medicalIssues
    }

    
}