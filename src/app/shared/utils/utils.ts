import { Permission } from '../../data/schema/permission.enum';

export class Utils {
  public static readonly URL_PATTERN = '(https?://)([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w ?=&.-]*/?';

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

  public static checkPermission(permissions: string[], permissionToCheck: Permission): boolean {
    if (!permissions || permissions.length <= 0) {
      return false;
    }

    return permissions.includes(permissionToCheck);
  }
}
