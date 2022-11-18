export class Utils {
  static textIncludesSearchedValueCaseInsensitive(text: string, valueToSearch: string): boolean {
    return text.toLowerCase().includes(valueToSearch.toLowerCase());
  }

  static arrayIncludesSearchedValueCaseInsensitive(array: string[], valueToSearch: string): boolean {
    return array.some(element => element.toLowerCase().includes(valueToSearch.toLowerCase()));
  }
}
