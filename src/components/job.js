import React from "react";

import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";

const Job = (props) => {
  return (
    <tr>
      <th scope="row">
        <FormattedMessage
          defaultMessage={props.offer.id}
          id="1"
        />
      </th>
      <td>
        <FormattedMessage
          defaultMessage={props.offer.name}
          id="2"
        />
      </td>
      <td>
        <FormattedMessage
          defaultMessage={props.offer.company}
          id="1"
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.salary} />
        {props.lenguaje === 'es' ? props.offer.salary > 2 ? ' millones' : ' millón' : props.offer.salary > 2 ? ' million' : ' millions'}
      </td>
      <td>
        <FormattedMessage
          defaultMessage={props.offer.city}
          id="1"
        />
      </td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber
          value={props.offer.visites}
        />
      </td>

    </tr>
  );
};

export default Job;
