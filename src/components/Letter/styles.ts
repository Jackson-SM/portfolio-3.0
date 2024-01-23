import { styled } from "@/config/stitches.config";
import { Text } from "@radix-ui/themes";

export const LetterStyled = styled(Text, {
  color: "$primary",

  variants: {
    gradient: {
      true: {
        background: `linear-gradient(to right, $primary, $secondary)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
  },
});
