import React, { useCallback } from "react";
import { isFieldRTL } from "payload/dist/admin/components/forms/field-types/shared";
import useField from "payload/dist/admin/components/forms/useField";
import withCondition from "payload/dist/admin/components/forms/withCondition";
import { useConfig } from "payload/dist/admin/components/utilities/Config";
import { useLocale } from "payload/dist/admin/components/utilities/Locale";
import { text } from "payload/dist/fields/validations";

import type { Props } from "./types";
import IconInput from "./input";

const Icon: React.FC<Props> = (props) => {
  const {
    name,
    admin: {
      className,
      components: { Error, Label, afterInput, beforeInput } = {},
      condition,
      description,
      placeholder,
      readOnly,
      rtl,
      style,
      width,
    } = {},
    inputRef,
    label,
    localized,
    maxLength,
    minLength,
    path: pathFromProps,
    required,
    validate = text,
    icons,
    renderSvg,
  } = props;

  const path = pathFromProps || name;
  const locale = useLocale();

  const { localization } = useConfig();
  const isRTL = isFieldRTL({
    fieldLocalized: localized as boolean,
    fieldRTL: rtl as boolean,
    locale,
    localizationConfig: localization || undefined,
  });

  const memoizedValidate = useCallback(
    (value: unknown, options: any) => {
      return validate(value, { ...options, maxLength, minLength, required });
    },
    [validate, minLength, maxLength, required],
  );

  const { errorMessage, setValue, showError, value } = useField<string>({
    condition,
    path,
    validate: memoizedValidate,
  });

  return (
    <IconInput
      Error={Error}
      Label={Label}
      afterInput={afterInput}
      beforeInput={beforeInput}
      className={className}
      description={description}
      errorMessage={errorMessage}
      inputRef={inputRef}
      label={label}
      name={name}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      path={path}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      rtl={isRTL}
      showError={showError}
      style={style}
      value={value}
      width={width}
      icons={icons}
      renderSvg={renderSvg}
    />
  );
};

export default withCondition(Icon);
