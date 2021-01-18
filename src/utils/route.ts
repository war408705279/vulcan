/**
 * @file route content
 */

// 是否是站内链接
export function checkIsInnerUrl(url: string): boolean {
  return url.indexOf('pages') === 0 || url.indexOf('/pages') === 0
}
