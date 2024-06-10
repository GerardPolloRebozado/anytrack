'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

function LinkTransition(props: any) {
  const router = useRouter();
  const handleClick = (e: any) => {
    if (!(document as any).startViewTransition) {
      // browser does not support view transition. Continue the default behavior.
      return;
    } else {
      // browser supports view transition. Animate the transtion.
      e.preventDefault();
      (document as any).startViewTransition(() => {
        router.push(props.href);
      });
    }
  };

  return (
    <Link onClick={handleClick} {...props}>
      {props.children}
    </Link>
  );
}
export default LinkTransition;
