import { IntoWasmQuotableOperation } from "../wasm";
import * as Wasm from "@nillion/client-wasm";
import { Operation, OperationType } from "./operation";
import { StoreId } from "../types";
import { Permissions } from "../nada";

export interface PermissionsSetArgs {
  id: StoreId;
  permissions: Permissions;
}

export class PermissionsSet implements Operation, IntoWasmQuotableOperation {
  type = OperationType.enum.PermissionsUpdate;

  constructor(public args: PermissionsSetArgs) {}

  intoQuotable(): Wasm.Operation {
    return Wasm.Operation.update_permissions();
  }

  toString(): string {
    return `Operation(type="PermissionsSet")`;
  }
}

export interface PermissionsRetrieveArgs {
  id: StoreId;
}

export class PermissionsRetrieve
  implements Operation, IntoWasmQuotableOperation
{
  type = OperationType.enum.PermissionsRetrieve;

  constructor(public args: PermissionsRetrieveArgs) {}

  intoQuotable(): Wasm.Operation {
    return Wasm.Operation.retrieve_permissions();
  }

  toString(): string {
    return `Operation(type="PermissionsRetrieve")`;
  }
}
