import { StateKeys } from "../../types/state.type";
import { State } from "../state.instance";

export class StyleState extends State {
  constructor() {
    super(StateKeys.STYLE)
  }
}