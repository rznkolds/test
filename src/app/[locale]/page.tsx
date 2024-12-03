import {useTranslations} from "next-intl";

export default function Home() {

  const t = useTranslations("NewsPage")

  return (
    <div>
      {
        t('news')
      }
    </div>
  );
}
