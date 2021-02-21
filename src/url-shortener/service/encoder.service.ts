import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class IEncoderService {
    public abstract encode(input: string): string;
}

@Injectable()
export class RandomEncoderService implements IEncoderService {
    public encode(input: string): string {
        const baseCode: string = this.generateBaseCode();
        const size = this.selectSize();
        return baseCode.substring(0, size);
    }

    private selectSize(): number {
        return Math.floor(Math.random() * 6) + 5;
    }

    private generateBaseCode(): string {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}
