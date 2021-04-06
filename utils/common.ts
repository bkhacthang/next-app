export const commonRes = (status: boolean, data: any) => {
  if (status) {
    return {
      success: status,
      data,
    }
  } else {
    return {
      success: status,
      message: data,
    }
  }
}
