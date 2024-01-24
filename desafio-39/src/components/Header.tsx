type HeaderProps = {
  image: string
}

export function Header({ image }: HeaderProps) {
  return (
    <header className="w-full h-[11.5rem] bg-gradient_light rounded-t-[20px] flex justify-center">
      <img
        src={image}
        alt="Imagem de um Smartwatch Amazfit Bip U Pro"
        className="w-[8.75rem] h-[14.5rem] object-cover -mt-12"
      />
    </header>
  )
}
