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
        <div className={classNames(cls.NotFoundPage, {}, [])} {...restProps}>
            {t("Страница не найдена")}
        </div>
    );
};

