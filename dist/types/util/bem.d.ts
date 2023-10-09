import classnames from 'classnames';
/**
 * classnameWithArraySupport:
 *
 * Adds array support to classname(). Falsy items are ignored.
 * Does not alter or modify any existing 'classname' functionality
 *
 * @example ```
 *    import { classnames, classname } from 'src/util/bem';
 *    let cn = classname(['foo', 'baz', '', undefined, null])
 *    cn('elem') -> ['foo__elem', 'baz_elem']
 * ```
 * @param string[] strArr
 */
declare const classnameWithArraySupport: (block: string | string[], ...rest: any) => (...params: any) => string;
export { classnameWithArraySupport as classname, classnames };
export { classnames as cns };
