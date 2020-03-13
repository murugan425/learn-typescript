export class LikeComponent {
    constructor (private likeCount: number, private isActive: boolean) {}

    get likesCount() {
        return this.likeCount;
    }

    get isSelected() {
        return this.isActive;
    }

    onSimpleClick() {
        if(this.isActive) {
            this.likeCount--;
            this.isActive = false;
        }
        else {
            this.likeCount++;
            this.isActive = true;
        }
    }

    onEffectiveClickImpl() {
        this.likeCount += this.isActive? -1: 1;
        this.isActive = !this.isActive;
    }
}