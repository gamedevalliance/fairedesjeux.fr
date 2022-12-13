import { readFileSync } from "fs"
import * as path from "path"
import { fileURLToPath } from "url"

let textMateDef = readFileSync(
	path.join(path.dirname(fileURLToPath(import.meta.url)), "renpy.tmLanguage.json")
).toString()

textMateDef = textMateDef.substring(textMateDef.indexOf("{"))

export default {
	id: "renpy",
	scopeName: "source.renpy",
	grammar: JSON.parse(textMateDef),
}
