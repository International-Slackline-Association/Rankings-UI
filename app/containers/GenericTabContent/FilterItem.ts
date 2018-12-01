export class FilterItem {
  public category: string;
  public name: string;
  public isSelected: boolean;
  public isSticky: boolean;

  public get id() {
    return this.category + '-' + this.name;
  }

  constructor(
    category: string,
    name: string,
    isSelected = false,
    isSticky = false,
  ) {
    this.category = category;
    this.name = name;
    this.isSelected = isSelected;
    this.isSticky = isSticky;
  }
}
