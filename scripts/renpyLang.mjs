import { readFileSync } from "fs"
import * as path from "path"
import { fileURLToPath } from "url"

const textMateDef = readFileSync(
	path.join(path.dirname(fileURLToPath(import.meta.url)), "renpy.tmLanguage.json")
).toString()

export default {
	id: "renpy",
	scopeName: "source.renpy",
	grammar: JSON.parse(textMateDef),
}
