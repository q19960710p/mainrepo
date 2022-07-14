const fs = require('fs')
const { findMatchFilesRecur } = require('./find-match-files-recur')

const getRoutesDirs = async (
	routesDirPath = '',
	fileNameMatch = undefined,
	mapCallback,
) => {
	const matchFiles = await findMatchFilesRecur(routesDirPath, '', fileNameMatch)

	if (matchFiles.length === 0) console.log('找不到路由目錄')

	// 過濾未 export default router 的檔案
	const files = await Promise.all(
		matchFiles.map(el => {
			const { path } = el
			return new Promise(resolve => {
				const fileString = fs.readFileSync(path).toString()
				if (fileString.match(/export\s+default\s+router/)) resolve(el)
				else resolve(undefined)
			})
		}),
	)

	const resultFiles = []

	files.forEach((el, index, els) => {
		if (el != null) {
			resultFiles.push(mapCallback != null ? mapCallback(el, index, els) : el)
		}
	})

	if (resultFiles.length === 0) console.log('沒有可用路由檔')

	return resultFiles
}

module.exports = { getRoutesDirs }
