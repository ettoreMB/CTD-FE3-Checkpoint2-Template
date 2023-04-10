function Spinner({ loading }) {
  if (!loading) {
    return null
  }

  return (
    <div className="d-flex align-items-center justify-content-center">
      <strong>Carregando...</strong>
      <div className="spinner-border text-secondary" role="status">
      </div>
    </div>
  )
}

export default Spinner