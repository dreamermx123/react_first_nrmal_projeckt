import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string;
    // Другие пропсы, если они есть
}

export const NotFoundPage = (props: NotFoundPageProps) => {
    const { className, ...restProps } = props;
    const {t} = useTranslation()
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div className={classNames(cls.NotFoundPage, {}, [className])} {...restProps}>
            {t("Страница не найдена")}
        </div>
    );
};

