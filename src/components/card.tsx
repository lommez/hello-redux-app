import React, { FunctionComponent } from "react";

type CardProps = {
  title: string,
  paragraph: string
}

// export const Card = ({ title, paragraph }: CardProps) => <aside>
//     <h2>{title}</h2>
//     <p>
//         {paragraph}
//     </p>
// </aside>

export const Card: FunctionComponent<CardProps> = ({ title, paragraph, children }) => {
  return (
    <aside>
      <h2>{title}</h2>
      <p>
        {paragraph}
      </p>
      {children}
    </aside>
  )
};