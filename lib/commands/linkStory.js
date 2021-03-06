const {window} = require("vscode")
const {setState} = require("../helpers/pivotaly")
const {getActiveBranch} = require("../helpers/git")
const {validate} = require("../validation/validate")
const {rebounds} = require("../validation/rebounds")

exports.linkStory = async (context) => {
  const storyID = await window.showInputBox({
    prompt: "Enter story ID for current branch",
    ignoreFocusOut: true})
  
  const branch = await getActiveBranch()
  await setState(context, branch, storyID)

  const shouldLink = await validate("linkStory", context)

  if(!shouldLink) {
    // no state
    await setState(context, undefined, undefined)
    return rebounds('failedLinkedStory', context)
  }
  return rebounds('linkedStory', context)
}
