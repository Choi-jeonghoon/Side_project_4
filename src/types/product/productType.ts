import { CompanyType } from '../company/companyType';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ProductType {
  // 상품(Product)에 대한 Type 정리
  export interface Product {
    // id: 제품의 고유 id
    id: string;
    // product_name: 제품의 이름
    product_name: string;
    // price: 제품의 가격 string or number 둘 다 가능
    price: string | number;
    // description: 제품에 대한 설명
    description: string;
    // company: 제품에 대한 회사 정보
    company: CompanyType;
    // category: 이 제품이 속한 카테고리 부모 key
    category: string;
    // tags: 이 제품을 검색할 수 있는 검색 필터에 사용될 태그들
    tags: Array<string>;
    // vendor: 이 제품을 제공하는 업체에 대한 정보를 알 수 있는 고유 id
    vendor: string;
  }
  // 제품의 제공업체(Vendor)에 대한 Type 정리
  export interface Vendors {
    // id: 제공업체에 대한 고유 id
    id: string;
    // company: 제공업체에 대한 정보
    company: CompanyType;
  }
}
