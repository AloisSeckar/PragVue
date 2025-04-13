import ical, { ICalCalendarMethod } from 'ical-generator'
import type { ICalCalendar } from 'ical-generator'

import { eventData } from '~/config/eventDate'

type CalendarEventResult = {
  calendar: ICalCalendar
  icalString: string
  downloadCalendar: () => void
}

export function useICalGenerator() {
  const generateICalFile = (): CalendarEventResult => {
    const calendar = ical({ name: eventData.summary })

    calendar.method(ICalCalendarMethod.REQUEST)

    calendar.createEvent({
      start: eventData.start,
      end: eventData.end,
      summary: eventData.summary,
      description: eventData.description,
      location: eventData.location,
      url: eventData.url,
    })

    const downloadCalendar = (): void => {
      const icalString = calendar.toString()
      const blob = new Blob([icalString], {
        type: 'text/calendar;charset=utf-8',
      })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')

      link.setAttribute('href', url)
      link.setAttribute('download', 'pragvue_event.ics')
      link.style.visibility = 'hidden'

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    downloadCalendar()

    return {
      calendar,
      icalString: calendar.toString(),
      downloadCalendar,
    }
  }

  return {
    generateICalFile,
  }
}
