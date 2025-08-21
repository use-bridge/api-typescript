# Reference

## ConsentVersions

<details><summary><code>client.consentVersions.<a href="/src/api/resources/consentVersions/client/Client.ts">listConsentVersions</a>({ ...params }) -> BridgeApi.ConsentVersionsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.consentVersions.listConsentVersions();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ConsentVersionsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConsentVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Consent

<details><summary><code>client.consent.<a href="/src/api/resources/consent/client/Client.ts">listPatientConsents</a>(id, { ...params }) -> BridgeApi.PatientConsentsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.consent.listPatientConsents("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.PatientConsentsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Consent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.consent.<a href="/src/api/resources/consent/client/Client.ts">createPatientConsent</a>(id, { ...params }) -> BridgeApi.PatientConsentCreateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.consent.createPatientConsent("id", {
    type: "ASSIGNMENT_OF_BENEFITS",
    version: "version",
    consentedAt: "2024-01-15T09:30:00Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.PatientConsentCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Consent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Events

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">listEvents</a>({ ...params }) -> BridgeApi.EventsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.listEvents();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.EventsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">getEvent</a>(id) -> BridgeApi.EventGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.getEvent("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Notes

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">createNote</a>({ ...params }) -> BridgeApi.NoteCreateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notes.createNote({
    serviceId: "serviceId",
    externalId: undefined,
    data: {
        PATIENT_NAME: undefined,
        ICD10: undefined,
        SUBJECTIVE: undefined,
        OBJECTIVE: undefined,
        ASSESSMENT: undefined,
        TEXT: undefined,
        PLAN: undefined,
        DIAGNOSIS: undefined,
        INTERVENTION: undefined,
        MONITORING_AND_EVALUATION: undefined,
        TELEHEALTH_DISCLAIMER: undefined,
        TOTAL_TIME_SPENT: undefined,
        TIME_SPENT_MINUTES: undefined,
        THERAPY_TIME_SPENT_MINUTES: undefined,
        PRESCRIPTION_WRITTEN: undefined,
        MEDICATION_MANAGED: undefined,
        DATE_RANGE_START: undefined,
        DATE_RANGE_END: undefined,
        MONITORING_DATA: undefined,
    },
    signature: {
        timestamp: "2024-01-15T09:30:00Z",
        providerId: "providerId",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.NoteCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">getNote</a>(id) -> BridgeApi.NoteGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notes.getNote("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">listNoteAddenda</a>(id, { ...params }) -> BridgeApi.NoteAddendaListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notes.listNoteAddenda("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.NoteAddendaListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">createNoteAddendum</a>(id, { ...params }) -> BridgeApi.NoteAddendumCreateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notes.createNoteAddendum("id", {
    externalId: undefined,
    data: {
        PATIENT_NAME: undefined,
        ICD10: undefined,
        SUBJECTIVE: undefined,
        OBJECTIVE: undefined,
        ASSESSMENT: undefined,
        TEXT: undefined,
        PLAN: undefined,
        DIAGNOSIS: undefined,
        INTERVENTION: undefined,
        MONITORING_AND_EVALUATION: undefined,
        TELEHEALTH_DISCLAIMER: undefined,
        TOTAL_TIME_SPENT: undefined,
        TIME_SPENT_MINUTES: undefined,
        THERAPY_TIME_SPENT_MINUTES: undefined,
        PRESCRIPTION_WRITTEN: undefined,
        MEDICATION_MANAGED: undefined,
        DATE_RANGE_START: undefined,
        DATE_RANGE_END: undefined,
        MONITORING_DATA: undefined,
    },
    signature: {
        timestamp: "2024-01-15T09:30:00Z",
        providerId: "providerId",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.NoteAddendumCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PatientToken

<details><summary><code>client.patientToken.<a href="/src/api/resources/patientToken/client/Client.ts">createPatientToken</a>({ ...params }) -> BridgeApi.PatientTokenCreateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patientToken.createPatientToken({
    patientId: "patientId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PatientTokenCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PatientToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Patients

<details><summary><code>client.patients.<a href="/src/api/resources/patients/client/Client.ts">listPatients</a>({ ...params }) -> BridgeApi.PatientsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patients.listPatients();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PatientsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Patients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patients.<a href="/src/api/resources/patients/client/Client.ts">createPatient</a>({ ...params }) -> BridgeApi.PatientCreateV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated, see [the V2 endpoint](/api/api-reference/patients/v-2/create-patient).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patients.createPatient({
    externalId: undefined,
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    dateOfBirth: "2024-01-15T09:30:00Z",
    phone: undefined,
    address: undefined,
    coverage: undefined,
    metadata: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PatientCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Patients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patients.<a href="/src/api/resources/patients/client/Client.ts">getPatient</a>(id) -> BridgeApi.PatientGetV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated, see [the V2 endpoint](/api/api-reference/patients/v-2/get-patient).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patients.getPatient("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Patients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patients.<a href="/src/api/resources/patients/client/Client.ts">updatePatient</a>(id, { ...params }) -> BridgeApi.PatientUpdateV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated, see [the V2 endpoint](/api/api-reference/patients/v-2/update-patient).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patients.updatePatient("id", {
    patientToken: undefined,
    externalId: undefined,
    coverage: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    dateOfBirth: undefined,
    phone: undefined,
    address: undefined,
    metadata: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.PatientUpdateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Patients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patients.<a href="/src/api/resources/patients/client/Client.ts">revalidatePatient</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patients.revalidatePatient("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Patients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Patients V2

<details><summary><code>client.patients.v2.<a href="/src/api/resources/patients/resources/v2/client/Client.ts">createPatient</a>({ ...params }) -> BridgeApi.PatientCreateV2Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patients.v2.createPatient({
    externalId: undefined,
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    dateOfBirth: "2024-01-15T09:30:00Z",
    phone: undefined,
    address: undefined,
    coverage: undefined,
    metadata: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PatientCreateV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patients.v2.<a href="/src/api/resources/patients/resources/v2/client/Client.ts">getPatient</a>(id) -> BridgeApi.PatientGetV2Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resolves a Patient by either `id` or `externalId`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patients.v2.getPatient("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patients.v2.<a href="/src/api/resources/patients/resources/v2/client/Client.ts">updatePatient</a>(id, { ...params }) -> BridgeApi.PatientUpdateV2Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patients.v2.updatePatient("id", {
    patientToken: undefined,
    externalId: undefined,
    coverage: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    dateOfBirth: undefined,
    phone: undefined,
    address: undefined,
    metadata: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.PatientUpdateV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payers

<details><summary><code>client.payers.<a href="/src/api/resources/payers/client/Client.ts">listPayers</a>({ ...params }) -> BridgeApi.PayersListV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This is deprecated in favor of [Payer Search](/api/api-reference/search/payer-search), it is highly recommended not to integrate with this API.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payers.listPayers();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PayersListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payers.<a href="/src/api/resources/payers/client/Client.ts">getPayer</a>(id) -> BridgeApi.PayerGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payers.getPayer("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payments

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">listServicePayments</a>(id, { ...params }) -> BridgeApi.ServicePaymentsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.listServicePayments("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.ServicePaymentsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">listPayments</a>({ ...params }) -> BridgeApi.PaymentsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.listPayments();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PaymentsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">createPayment</a>({ ...params }) -> BridgeApi.PaymentCreateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.createPayment({
    serviceId: "serviceId",
    paidAt: "2024-01-15T09:30:00Z",
    transactionId: "transactionId",
    type: "PATIENT",
    amount: 1,
    externalId: undefined,
    memo: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PaymentCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">getPayment</a>(id) -> BridgeApi.PaymentGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.getPayment("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Policies

<details><summary><code>client.policies.<a href="/src/api/resources/policies/client/Client.ts">createPolicy</a>({ ...params }) -> BridgeApi.PolicyCreateV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Policy, waits synchronously until the Payer resolves initial eligibility. Never returns the `PENDING` status. Request may timeout after 60 seconds. This has been deprecated infavor of async flows (see [the V2 endpoint](/api/api-reference/policies/v-2/create-policy)).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.policies.createPolicy({
    person: {
        firstName: "firstName",
        middleName: undefined,
        lastName: "lastName",
        dateOfBirth: "2024-01-15T09:30:00Z",
    },
    state: "AL",
    payerId: "payerId",
    memberId: undefined,
    dateOfService: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PolicyCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Policies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.policies.<a href="/src/api/resources/policies/client/Client.ts">getPolicy</a>(id) -> BridgeApi.PolicyGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.policies.getPolicy("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Policies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.policies.<a href="/src/api/resources/policies/client/Client.ts">revalidatePolicy</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.policies.revalidatePolicy("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Policies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Policies V2

<details><summary><code>client.policies.v2.<a href="/src/api/resources/policies/resources/v2/client/Client.ts">createPolicy</a>({ ...params }) -> BridgeApi.PolicyCreateV2Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Policy, returning immediately with status of `PENDING`. Use the Get Policy API, or monitor webhooks, to receive updates.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.policies.v2.createPolicy({
    person: {
        firstName: "firstName",
        middleName: undefined,
        lastName: "lastName",
        dateOfBirth: "2024-01-15T09:30:00Z",
    },
    state: "AL",
    payerId: "payerId",
    memberId: undefined,
    dateOfService: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PolicyCreateV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ProviderEligibility

<details><summary><code>client.providerEligibility.<a href="/src/api/resources/providerEligibility/client/Client.ts">createProviderEligibility</a>({ ...params }) -> BridgeApi.ProviderEligibilityCreateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerEligibility.createProviderEligibility({
    dateOfService: "2024-01-15T09:30:00Z",
    serviceTypeId: "serviceTypeId",
    location: {
        line1: undefined,
        line2: undefined,
        city: undefined,
        state: "AL",
        postalCode: undefined,
        country: undefined,
    },
    payerId: "payerId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ProviderEligibilityCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderEligibility.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providerEligibility.<a href="/src/api/resources/providerEligibility/client/Client.ts">getProviderEligibility</a>(id) -> BridgeApi.ProviderEligibilityGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerEligibility.getProviderEligibility("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderEligibility.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Providers

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">listProviders</a>({ ...params }) -> BridgeApi.ProvidersListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providers.listProviders();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ProvidersListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Providers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">getProvider</a>(id) -> BridgeApi.ProviderGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providers.getProvider("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Providers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">updateProvider</a>(id, { ...params }) -> BridgeApi.ProviderUpdateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providers.updateProvider("id", {
    externalId: undefined,
    providerEligibilityEnabled: undefined,
    serviceEligibilityEnabled: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.ProviderUpdateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Providers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Search

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">payerSearch</a>({ ...params }) -> BridgeApi.SearchPayerV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.payerSearch({
    query: "query",
    limit: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.SearchPayerV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ServiceEligibility

<details><summary><code>client.serviceEligibility.<a href="/src/api/resources/serviceEligibility/client/Client.ts">createServiceEligibility</a>({ ...params }) -> BridgeApi.ServiceEligibilityCreateV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Runs a synchronous "Hard Eligibility" check, returning when complete. Deprecated in favor of async V2 API

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceEligibility.createServiceEligibility({
    serviceTypeId: "serviceTypeId",
    dateOfService: "2024-01-15T09:30:00Z",
    policyIds: ["policyIds", "policyIds"],
    state: "AL",
    clinicalInfo: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ServiceEligibilityCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ServiceEligibility.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.serviceEligibility.<a href="/src/api/resources/serviceEligibility/client/Client.ts">getServiceEligibility</a>(id) -> BridgeApi.ServiceEligibilityGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceEligibility.getServiceEligibility("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ServiceEligibility.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ServiceEligibility V2

<details><summary><code>client.serviceEligibility.v2.<a href="/src/api/resources/serviceEligibility/resources/v2/client/Client.ts">createServiceEligibility</a>({ ...params }) -> BridgeApi.ServiceEligibilityCreateV2Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a ServiceEligibility, returns immediately in the `PENDING` status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceEligibility.v2.createServiceEligibility({
    serviceTypeId: "serviceTypeId",
    dateOfService: "2024-01-15T09:30:00Z",
    policyIds: ["policyIds", "policyIds"],
    state: "AL",
    clinicalInfo: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ServiceEligibilityCreateV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ServiceTypes

<details><summary><code>client.serviceTypes.<a href="/src/api/resources/serviceTypes/client/Client.ts">listServiceTypes</a>({ ...params }) -> BridgeApi.ServiceTypesListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceTypes.listServiceTypes();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ServiceTypesListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ServiceTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.serviceTypes.<a href="/src/api/resources/serviceTypes/client/Client.ts">getServiceType</a>(id) -> BridgeApi.ServiceTypeGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceTypes.getServiceType("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ServiceTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Services

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">listServices</a>({ ...params }) -> BridgeApi.ServicesListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.listServices();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ServicesListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">createService</a>({ ...params }) -> BridgeApi.ServiceCreateV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new `Service`, waits for the `ServiceEligibility` to resolve synchronously. Request may timeout after 60 seconds, deprecated in favor of async API.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.createService({
    patientId: "patientId",
    dateOfService: "2024-01-15T09:30:00Z",
    serviceTypeId: "serviceTypeId",
    externalId: undefined,
    location: {
        line1: undefined,
        line2: undefined,
        city: undefined,
        state: "AL",
        postalCode: undefined,
        country: undefined,
    },
    providerId: "providerId",
    serviceEligibility: undefined,
    priorAuthorizationNumber: undefined,
    metadata: undefined,
    responsibleParty: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ServiceCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">getService</a>(id) -> BridgeApi.ServiceGetV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a Service by `id` or `externalId`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.getService("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">updateService</a>(id, { ...params }) -> BridgeApi.ServiceUpdateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.updateService("id", {
    patientToken: undefined,
    dateOfService: undefined,
    serviceTypeId: undefined,
    location: undefined,
    externalId: undefined,
    providerId: undefined,
    priorAuthorizationNumber: undefined,
    responsibleParty: undefined,
    metadata: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.ServiceUpdateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">revalidateService</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.revalidateService("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">cancelService</a>(id) -> BridgeApi.ServiceCancelV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.cancelService("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">billService</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.billService("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">getServiceNote</a>(id) -> BridgeApi.ServiceNoteGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.getServiceNote("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">deleteServiceNote</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.deleteServiceNote("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Services V2

<details><summary><code>client.services.v2.<a href="/src/api/resources/services/resources/v2/client/Client.ts">listServices</a>({ ...params }) -> BridgeApi.ServicesListV2Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.v2.listServices();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.services.ServicesListV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.v2.<a href="/src/api/resources/services/resources/v2/client/Client.ts">createService</a>({ ...params }) -> BridgeApi.ServiceCreateV2Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new `Service`, creates the `ServiceEligibility` in status `PENDING`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.v2.createService({
    patientId: "patientId",
    dateOfService: "2024-01-15T09:30:00Z",
    serviceTypeId: "serviceTypeId",
    externalId: undefined,
    location: {
        line1: undefined,
        line2: undefined,
        city: undefined,
        state: "AL",
        postalCode: undefined,
        country: undefined,
    },
    providerId: "providerId",
    serviceEligibility: undefined,
    priorAuthorizationNumber: undefined,
    metadata: undefined,
    responsibleParty: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ServiceCreateV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
