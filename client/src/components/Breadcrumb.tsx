import React from "react"
import '/src/styles/components/breadcrumb.scss'
import MaterialSymbol from "./MaterialSymbol";

interface BreadcrumbsProps {
  children: React.ReactNode;
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

interface BreadcrumbItemProps {
  children: React.ReactElement | string;
  isActive?: boolean
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
