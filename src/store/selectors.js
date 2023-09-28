function selectCounter(state) {
  return state && state?.count || 0
}

function selectLoading(state) {
  return state && state?.loading || false
}

function selectRecords(state) {
  return state && state?.records || false
}

function selectError(state) {
  return state && state?.error || false
}

function selectSuccess(state) {
  return state && state?.success || false
}


export {
  selectCounter,
  selectLoading,
  selectRecords,
  selectError,
  selectSuccess
}