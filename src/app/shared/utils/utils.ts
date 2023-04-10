import { IAuthStateModel } from '../../data/schema/auth-state-model';
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

  public static checkPermission(auth: IAuthStateModel, permission: Permission): boolean {
    return auth.permissions.includes(permission);
  }
}
