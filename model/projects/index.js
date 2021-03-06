const {pivotalTracker} = require("../common")
const {common} = require("../../lib/commands/common")
const {normaliseFields} = require("../../lib/adapters/normaliseFields")


exports.getProject = function(context, fields = []) {
  fields = normaliseFields(fields)
  const options = {
    path: `/services/v5/projects/${context.workspaceState.get(common.globals.projectID)}?fields=${fields.join()}`,
    headers: {
      "X-TrackerToken": `${context.globalState.get(common.globals.APItoken)}`
    }
  }

  return new Promise((resolve) => {
    // @ts-ignore
    pivotalTracker.get(options, (err, req, res, data) => resolve({res,data}))
  })
}
