import * as ts from "typescript";
import * as errors from "../../errors";
import {Node, Expression} from "./../common";
import {ChildOrderableNode} from "./../base";
import {Statement} from "./Statement";
import {Identifier} from "../../main";

export const BreakStatementBase = ChildOrderableNode(Statement);
export class BreakStatement extends BreakStatementBase<ts.BreakStatement> {
    /**
     * Gets this break statement's label or undefined if it does not exist.
     */
    getLabel() {
        return this.compilerNode.label == null
            ? undefined
            : this.getNodeFromCompilerNode(this.compilerNode.label) as Identifier;
    }

    /**
     * Gets this break statement's label or throw if it does not exist.
     */
    getLabelOrThrow() {
        return errors.throwIfNullOrUndefined(this.getLabel(), "Expected to find a label.");
    }
}