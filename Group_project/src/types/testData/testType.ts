export namespace A {
  export interface Key {
    [dam: string]: Main;
  }
  export interface Main extends Body {
    group: Sub[];
  }
  export interface Sub extends Body {
    group: Body[];
  }

  export interface Body {
    deptname: string;

    dam: string;

    deptid1: string;

    deptid2: string;

    q01: string;
  }
}
