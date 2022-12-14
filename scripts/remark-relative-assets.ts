import type { Root } from "mdast"
import * as path from "path"
import type { Plugin, Transformer } from "unified"
import { visit } from "unist-util-visit"

// Proper MDX types for this are insanely complex and slow down VS Code to a crawl, so let's make up a simpler type
// just so we can get work done for now. Other types are also causing performance issues but this one is the worse
interface MDXElement {
	type: string
	name: string
	attributes: {
		type: string
		name: string
		value: string
	}[]
	children: MDXElement[]
	position: {
		start: { line: number; column: number; offset: number }
		end: { line: number; column: number; offset: number }
	}
	data: Record<string, any>
}

export function remarkFixRelativeAssetLinks(): Plugin<[], Root> {
	const transformer: Transformer<Root> = (tree, file) => {
		visit(tree, "mdxJsxFlowElement", (element: MDXElement) => {
			if (!["Image", "Video"].includes(element.name)) return element as any

			element.attributes = element.attributes.map((attr) => {
				if (attr.name !== "src") return attr

				// Resolve the filepath of the image from the directory of the MDX file
				const mdxFilePath = file.history.at(-1)

				if (mdxFilePath) {
					attr.value = path.resolve(path.dirname(mdxFilePath), attr.value)
				}

				return attr
			})
		})
	}

	return function attacher() {
		return transformer
	}
}
