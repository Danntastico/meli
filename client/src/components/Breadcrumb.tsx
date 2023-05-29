import React from "react";
import MaterialSymbol from "./MaterialSymbol";
import '/src/styles/components/breadcrumb.scss';

interface BreadcrumbsProps {
  children: React.ReactNode;
}


interface BreadcrumbItemProps {
  children: React.ReactElement | string;
  isActive?: boolean
}


type BreadCrumbType = typeof BreadcrumbRaw & {
  Item: typeof BreadcrumbItem
}

const BreadcrumbRaw: React.FC<BreadcrumbsProps> = ({children}) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {children}
      </ol>
    </nav>
  )
}

const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  const {children, isActive} = props
  return (
    <li className="breadcrumb-item" aria-current={isActive && 'page'}>
      { children }
      {!isActive && (
        <MaterialSymbol icon="chevron_right"/>
      )}
    </li>
  )
}

BreadcrumbItem.displayName = "Breadcrumb.Item"

export const Breadcrumb = BreadcrumbRaw as BreadCrumbType
Breadcrumb.Item = BreadcrumbItem
