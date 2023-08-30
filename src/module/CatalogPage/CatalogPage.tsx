/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import { IconSprite, Icon } from '../shared';
import { ContentLayout } from '../shared/ContentLayout';
import {
  IconsWrapper,
  IconsTitle,
  CatalogTitle,
  CatalogModelsLeft,
  SortWrapper,
  SortTitle,
  SortDropDown,
  SortDropdownContent,
} from './CatalogPage.styles';
import { Catalog } from '../Catalog/Catalog';
import { PhonesContext } from '../../context/phonesContext';
import { Spinner } from '../Spinner';
import { SortLink } from '../SortLink';
import { Pagination } from '../Pagination/Pagination';
import { LimitLink } from '../LimitLink';

export const CatalogPage: React.FC = () => {
  const { loadPhones, phones, phonesLoading, currentPage, currentLimit } =
    useContext(PhonesContext);
  useEffect(() => {
    loadPhones();
  }, [currentPage, currentLimit]);

  const [openSort, setOpenSort] = useState(false);
  const [openLimit, setOpenLimit] = useState(false);

  return (
    <ContentLayout>
      {phonesLoading ? (
        <Spinner />
      ) : (
        <>
          <IconsWrapper>
            <IconSprite />
            <Icon size="24" spriteName="home" />
            <Icon size="12" spriteName="arrow-right" />
            <IconsTitle>Phones</IconsTitle>
          </IconsWrapper>

          <CatalogTitle>Mobile Phones</CatalogTitle>
          <CatalogModelsLeft>95 models</CatalogModelsLeft>

          <SortWrapper>
            <div onClick={() => setOpenSort((prev) => !prev)}>
              <SortTitle>Sort by</SortTitle>
              <SortDropDown>
                Newest
                <IconSprite />
                <Icon spriteName="arrow-down" />
              </SortDropDown>
              {openSort && (
                <SortDropdownContent>
                  <li>
                    <SortLink title="Newer" />
                  </li>

                  <li>
                    <SortLink title="Newer" />
                  </li>

                  <li>
                    <SortLink title="Newer" />
                  </li>
                </SortDropdownContent>
              )}
            </div>

            <div onClick={() => setOpenLimit((prev) => !prev)}>
              <SortTitle>Items on page</SortTitle>
              <SortDropDown>
                {currentLimit}
                <IconSprite />
                <Icon spriteName="arrow-down" />
              </SortDropDown>
              {openLimit && (
                <SortDropdownContent>
                  {['4', '10', '16', '32'].map((num) => (
                    <LimitLink key={num} num={num} />
                  ))}
                </SortDropdownContent>
              )}
            </div>
          </SortWrapper>

          <Catalog phonesData={phones} />

          <Pagination products={phones} itemsPerPage={5} />
        </>
      )}
    </ContentLayout>
  );
};
