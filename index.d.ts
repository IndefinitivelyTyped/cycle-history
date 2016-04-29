import { History, Location, createLocation } from 'history'

export type HistorySink = Location | string | { type: 'go', value: number }

export function createServerHistory(): History

export type historyDriver = (sink$: Rx.Observable<HistorySink>) => Rx.Observable<Location>

export function makeHistoryDriver(history: History, options?: { capture?: boolean }): historyDriver

export function supportsHistory(): boolean

export { History, Location, createLocation }
