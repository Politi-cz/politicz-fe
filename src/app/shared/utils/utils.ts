import dayjs from 'dayjs';

export class Utils {
  public static readonly URL_PATTERN = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  public static textIncludesSearchedValueCaseInsensitive(
    text: string,
    valueToSearch: string,
  ): boolean {
    return text.toLowerCase().includes(valueToSearch.toLowerCase());
  }

  public static arrayIncludesSearchedValueCaseInsensitive(
    array: string[],
    valueToSearch: string,
  ): boolean {
    return array.some((element: string) =>
      element.toLowerCase().includes(valueToSearch.toLowerCase()),
    );
  }

  public static formatDate(date: string, format: string): string {
    return dayjs(date).format(format);
  }

  public static generateGuid(): string {
    return crypto.randomUUID();
  }
}
