import { getFailureResponse, getSuccessResponse } from '../../helpers/generateResponseValue'
import { getSignedUrlForUpload } from '../../helpers/getSignedUrlForUpload'

const handler = async () => {
  try {
    // TODO: have a way to create a new client
    const client = 'clientA'
    const result = getSignedUrlForUpload(client)
    return getSuccessResponse(result)
  } catch (error) {
    console.error('Error ', error)
    return getFailureResponse(error)
  }
}

export {
  handler
}
