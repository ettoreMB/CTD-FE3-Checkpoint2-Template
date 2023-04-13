import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

test("Teste Footer", () => {
  render(<Footer />)

  const text = screen.getByText('Voltar para o topo')
  
  expect(text).toBeInTheDocument()

})