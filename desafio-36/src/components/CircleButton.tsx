import { ButtonHTMLAttributes, ElementType } from "react"

interface CircleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
  isChecked?: boolean
}

export function CircleButton({
  icon: Icon,
  isChecked,
  ...rest
}: CircleButtonProps) {
  return (
    <button
      {...rest}
      type="button"
      className="size-10 p-2 bg-background rounded-full flex justify-center items-center group outline-none shadow-button_default hover:shadow-button_hover"
    >
      <Icon
        className={`${
          isChecked && "fill-secondary"
        } size-6 group-hover:size-5 group-focus-visible:size-5 transition-all duration-75 ease-in-out`}
        strokeWidth={isChecked ? 0 : 1.5}
      />
    </button>
  )
}
