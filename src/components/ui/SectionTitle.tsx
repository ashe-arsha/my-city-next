import Link from "next/link";

type Props = {
  title: string;
  actionText?: string;
  actionLink?: string;
};

function SectionTitle({ title, actionText, actionLink }: Props) {
  return (
    <div className="section-title-row">
      <h2 className="section-title">{title}</h2>

      {actionText && actionLink ? (
        <Link href={actionLink} className="link-btn">
          {actionText}
        </Link>
      ) : null}
    </div>
  );
}

export default SectionTitle;